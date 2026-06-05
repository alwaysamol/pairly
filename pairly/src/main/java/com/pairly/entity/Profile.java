package com.pairly.entity;

public class Profile {

    private Long id;
    private String name;
    private int age;
    private String image;

    public Profile(Long id, String name, int age, String image) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.image = image;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public String getImage() {
        return image;
    }
}