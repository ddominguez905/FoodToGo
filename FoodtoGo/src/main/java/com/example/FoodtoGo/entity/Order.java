package com.example.FoodtoGo.entity;

import lombok.*;
import com.example.FoodtoGo.entity.*;
import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Data
@Entity
@Table(name="orders")
public class Order implements Serializable {

    @Id
    @GeneratedValue
    private int id;
    private Timestamp creationTime;
    private double totalAmount;

    @OneToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "orders_foods",
            joinColumns = @JoinColumn(name = "orders_id"),
            inverseJoinColumns = @JoinColumn(name = "foods_id")
    )
    private List<Food> foods = new ArrayList<>();

    //Consumer can have one order, but order has many entitys ?
/*    @OneToOne
    @JoinColumn(name = "consumer_id")
    private Consumer consumer;*/

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "restaurants_id")
    private Restaurant restaurants;

/*    @OneToOne
    @JoinColumn(name = "courier_id")
    private Courier courier;*/


}