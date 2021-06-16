package com.lab2.demo;

import com.lab2.demo.dto.ReceiptDTO;
import com.lab2.demo.entity.Receipt;

public class ReceiptConvertToDTOEntity {
    public static Receipt convertEntity(ReceiptDTO receiptDTO) {
        Receipt receipt = new Receipt();
        receipt.setOrderid(receiptDTO.getOrderid());
        receipt.setPaid(receiptDTO.isPaid());
        receipt.setPrice(String.valueOf(receiptDTO.getPrice()));
        return receipt;
    }

    public static ReceiptDTO convertToDTO(Receipt receipt) {
        ReceiptDTO receiptDTO = new ReceiptDTO();
        receiptDTO.setOrderid(receipt.getOrderid());
        receiptDTO.setPrice(Integer.parseInt(receipt.getPrice()));
        receiptDTO.setPaid(receipt.isPaid());
        return receiptDTO;
    }
}
