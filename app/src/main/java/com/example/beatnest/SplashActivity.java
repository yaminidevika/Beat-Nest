package com.example.beatnest;

import android.content.Intent;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.os.Handler;

import androidx.appcompat.app.AppCompatActivity;

public class SplashActivity extends AppCompatActivity {
    MediaPlayer splashSound;
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);
        splashSound = MediaPlayer.create(this, R.raw.your_intro_sound); // Use your actual file name here
        splashSound.start();

        new Handler().postDelayed(() -> {
            if (splashSound != null) {
                splashSound.stop();
                splashSound.release();
                splashSound = null;
            }
            startActivity(new Intent(SplashActivity.this, MainActivity.class));
            finish();
        }, 3000);
    }
}
