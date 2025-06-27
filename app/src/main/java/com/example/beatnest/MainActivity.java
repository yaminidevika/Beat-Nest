package com.example.beatnest;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.media.MediaPlayer;
import android.os.Bundle;
import android.util.Log;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {
    RecyclerView recyclerView;
    ArrayList<MusicModel> musicList;
    MediaPlayer mediaPlayer;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        recyclerView = findViewById(R.id.recyclerView);

        musicList = new ArrayList<>();
        musicList.add(new MusicModel("Samajavaragamana", R.raw.samajavaragamana));
        musicList.add(new MusicModel("Butta Bomma", R.raw.butta_bomma));
        musicList.add(new MusicModel("Ramulo Ramula", R.raw.ramulo_ramula));
        musicList.add(new MusicModel("Srivalli", R.raw.srivalli));
        musicList.add(new MusicModel("Oo Antava", R.raw.oo_antava));
        musicList.add(new MusicModel("Naatu Naatu", R.raw.naatu_naatu));
        musicList.add(new MusicModel("Jai Balayya", R.raw.jai_balayya));
        musicList.add(new MusicModel("Halamithi Habibo", R.raw.halamithi));
        musicList.add(new MusicModel("Mind Block", R.raw.mind_block));
        musicList.add(new MusicModel("Arabic Kuthu", R.raw.arabic_kuthu));
        Log.d("MUSIC_DEBUG", "List size: " + musicList.size());
        recyclerView.setLayoutManager(new LinearLayoutManager(this));
       MusicAdapter adapter=new MusicAdapter(MainActivity.this,musicList);
        recyclerView.setAdapter(adapter);
    }
}