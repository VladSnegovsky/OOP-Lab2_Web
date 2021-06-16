package com.lab2.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@Table(name = "receipts")
@NoArgsConstructor
@AllArgsConstructor
public class Receipt {
    @Id
    @GeneratedValue(generator = "receipts_id_seq", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "receipts_id_seq", sequenceName = "receipts_id_seq", allocationSize = 1)
    @Column(name = "id", updatable = false)
    private Integer id;

    @Column(name = "orderid")
    private int orderid;

    @Column(name = "price")
    private String price;

    @Column(name = "paid")
    private boolean paid;
}
