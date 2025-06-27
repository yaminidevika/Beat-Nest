package com.example.beatnest;

public class MusicModel {
    String title;
    int fileId;

    public MusicModel(String title, int fileId) {
        this.title = title;
        this.fileId = fileId;
    }
    public String getTitle() { return title; }
    public int getFileId() { return fileId; }
}
