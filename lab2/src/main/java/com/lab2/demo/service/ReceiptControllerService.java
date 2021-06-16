package com.lab2.demo.service;

import com.lab2.demo.ReceiptConvertToDTOEntity;
import com.lab2.demo.dto.ReceiptDTO;
import com.lab2.demo.entity.Receipt;
import com.lab2.demo.repository.ReceiptRepository;
import com.lab2.demo.service.data.ReceiptService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class ReceiptControllerService {
    private final ReceiptRepository receiptRepository;
    private final ReceiptService receiptService;
    private final OrderControllerService orderControllerService;

    public ReceiptDTO addReceipt(ReceiptDTO receiptDTO) {
        System.out.println("ADDRECEIPT");
        Receipt receipt = new Receipt();
        receipt.setOrderid(receiptDTO.getOrderid());
        receipt.setPrice(String.valueOf(receiptDTO.getPrice()));
        receipt.setPaid(false);
        receipt = receiptService.addReceipt(receipt);
        orderControllerService.setCalculated(receiptDTO.getOrderid());
        return ReceiptConvertToDTOEntity.convertToDTO(receipt);
    }

//    public ReceiptDTO setPaid(int id) {
//        Receipt receipt = receiptService.setPaid(id);
//        return ReceiptConverter.convertToDTO(receipt);
//    }

    public int checkCalculated() {
        System.out.println("CHECKCALCULATED");
        Receipt receipt = receiptService.checkCalculated();
        if (receipt.getPrice().equals("-1"))
            return -1;
        else
            return Integer.parseInt(receipt.getPrice());
    }
}
