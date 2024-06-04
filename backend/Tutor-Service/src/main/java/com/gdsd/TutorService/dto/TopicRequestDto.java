package com.gdsd.TutorService.dto;

import com.gdsd.TutorService.model.Tutor;
import jakarta.persistence.*;

public class TopicRequestDto {
    private Integer tutorId;
    private String topicName;
    private Double price;

    private Double experience;

    public TopicRequestDto() {
    }

    public Integer getTutorId() {
        return tutorId;
    }

    public void setTutorId(Integer tutorId) {
        this.tutorId = tutorId;
    }

    public String getTopicName() {
        return topicName;
    }

    public void setTopicName(String topicName) {
        this.topicName = topicName;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Double getExperience() {
        return experience;
    }

    public void setExperience(Double experience) {
        this.experience = experience;
    }
}
