package com.example.beatnest;

import android.content.Context;
import android.media.MediaPlayer;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageButton;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;
import java.util.ArrayList;

public class MusicAdapter extends RecyclerView.Adapter<MusicAdapter.MusicViewHolder> {
    Context context;
    ArrayList<MusicModel> musicList;
    MediaPlayer player =null;
    int currentlyPlayingPosition=-1;


    public MusicAdapter(MainActivity context, ArrayList<MusicModel> musicList) {
        this.context = context;
        this.musicList = musicList;
    }

    @NonNull
    @Override
    public MusicViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        return new MusicViewHolder(LayoutInflater.from(context).inflate(R.layout.item_music, parent, false));
    }
    @Override
    public void onBindViewHolder(@NonNull MusicViewHolder holder, int position) {
        MusicModel model = musicList.get(position);
        holder.songName.setText(model.getTitle());

        // Set the correct icon based on current playing state
        if (position == currentlyPlayingPosition && player != null && player.isPlaying()) {
            holder.btnPlayPause.setImageResource(R.drawable.ic_pause);
        } else {
            holder.btnPlayPause.setImageResource(R.drawable.ic_play);
        }

        holder.btnPlayPause.setOnClickListener(v -> {
            if (position == currentlyPlayingPosition) {
                if (player != null && player.isPlaying()) {
                    player.pause();
                    holder.btnPlayPause.setImageResource(R.drawable.ic_play);
                } else if (player != null) {
                    player.start();
                    holder.btnPlayPause.setImageResource(R.drawable.ic_pause);
                }
            } else {
                if (player != null) {
                    player.release();
                }
                player = MediaPlayer.create(context, model.getFileId());
                player.start();

                notifyItemChanged(currentlyPlayingPosition); // update old item
                currentlyPlayingPosition = position;
                notifyItemChanged(currentlyPlayingPosition); // update new item
            }
        });
        holder.btnNext.setOnClickListener(v -> {
            int nextPosition = position + 1;
            if (nextPosition < musicList.size()) {
                playSong(nextPosition);
            }
        });
        holder.btnPrev.setOnClickListener(v -> {
            int prevPosition = position - 1;
            if (prevPosition >= 0) {
                playSong(prevPosition);
            }
        });
    }

    private void playSong(int newPosition) {
        if (player != null) {
            player.release();
        }
        player = MediaPlayer.create(context, musicList.get(newPosition).getFileId());
        player.start();

        notifyItemChanged(currentlyPlayingPosition);
        currentlyPlayingPosition = newPosition;
        notifyItemChanged(currentlyPlayingPosition);
    }

    @Override
    public int getItemCount() {
        return musicList.size();
    }

    public  static class MusicViewHolder extends RecyclerView.ViewHolder {
        TextView songName;
        ImageButton btnPlayPause, btnNext, btnPrev;
        public MusicViewHolder(View itemView) {
            super(itemView);
            songName = itemView.findViewById(R.id.songName);
            btnPlayPause = itemView.findViewById(R.id.btnPlayPause);
            btnNext = itemView.findViewById(R.id.btnNext);
            btnPrev = itemView.findViewById(R.id.btnPrev);
        }
    }
}

