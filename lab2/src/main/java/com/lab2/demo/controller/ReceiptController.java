package com.lab2.demo.controller;

import com.lab2.demo.service.ReceiptControllerService;
import com.lab2.demo.dto.ReceiptDTO;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@AllArgsConstructor
public class ReceiptController {
    private final ReceiptControllerService receiptControllerService;

    @PostMapping(value = "/receipt")
    public ReceiptDTO addReceipt(@RequestBody ReceiptDTO receiptDTO) {
        return receiptControllerService.addReceipt(receiptDTO);
    }

    @GetMapping(value = "/receipt")
    public int checkCalculated() {
        return receiptControllerService.checkCalculated();
    }
}