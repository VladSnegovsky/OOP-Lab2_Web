package com.lab2.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@Table(name = "orders")
@NoArgsConstructor
@AllArgsConstructor
public class Order {
    @Id
    @GeneratedValue(generator = "orders_id_seq", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "orders_id_seq", sequenceName = "orders_id_seq", allocationSize = 1)
    @Column(name = "id", updatable = false)
    private Integer id;

    @Column(name = "buckwheat")
    private String buckwheat;

    @Column(name = "rice")
    private String rice;

    @Column(name = "compote")
    private String compote;

    @Column(name = "cyberCutlet")
    private String cyberCutlet;

    @Column(name = "calculated")
    private boolean calculated;
}
