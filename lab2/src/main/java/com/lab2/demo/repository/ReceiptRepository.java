package com.lab2.demo.repository;

import com.lab2.demo.entity.Receipt;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReceiptRepository extends JpaRepository<Receipt, Integer> {
}

//    Optional<Receipt> getReceiptById(Integer id);