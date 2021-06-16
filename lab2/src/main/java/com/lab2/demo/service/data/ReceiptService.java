package com.lab2.demo.service.data;

import com.lab2.demo.entity.Order;
import com.lab2.demo.entity.Receipt;
import com.lab2.demo.repository.OrderRepository;
import com.lab2.demo.repository.ReceiptRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class ReceiptService {
    private final ReceiptRepository receiptRepository;
    private final OrderRepository orderRepository;

    @Transactional
    public Receipt getReceipt(int id) {
        List<Receipt> receipts = receiptRepository.findAll();
        for (Receipt receipt : receipts) {
            if (receipt.getOrderid() == id)
                return receipt;
        }
        Receipt receipt = new Receipt();
        receipt.setPrice("-1");
        return receipt;
    }

    @Transactional
    public Receipt addReceipt(Receipt receipt) {
        receipt = receiptRepository.save(receipt);
        return receipt;
    }

    @Transactional
    public void setPaid(String id) {
        List<Receipt> receipts = receiptRepository.findAll();
        for (Receipt receipt : receipts) {
            if (receipt.getOrderid() == Integer.parseInt(id)){
                receipt.setPaid(true);
                receiptRepository.save(receipt);
                break;
            }
        }
    }

    @Transactional
    public Receipt checkCalculated() {
        int id = -1;
        List<Order> orders = orderRepository.findAll();
        for (Order order : orders) {
            id = order.getId();
        }

        List<Receipt> receipts = receiptRepository.findAll();
        for (Receipt receipt : receipts) {
            if (receipt.getOrderid() == id)
                return receipt;
        }
        Receipt receipt = new Receipt();
        receipt.setPrice("-1");
        return receipt;
    }
}
