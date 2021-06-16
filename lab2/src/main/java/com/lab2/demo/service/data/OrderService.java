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
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;
    private final ReceiptRepository receiptRepository;

    @Transactional
    public int addOrder(Order order) {
        order = orderRepository.save(order);
        return order.getId();
    }

    @Transactional
    public Order getUncountedOrders() {
        List<Order> orders = orderRepository.findAll();
        for (Order order : orders) {
            if (!order.isCalculated())
                return order;
        }

        Order order = new Order();
        order.setBuckwheat("-1");
        return order;
    }

    @Transactional
    public Order setCalculated(Integer id) {
        Optional<Order> order1 = orderRepository.findById(id);
        Order order = order1.orElseThrow(() -> new StringIndexOutOfBoundsException("Order not found."));
        order.setCalculated(true);
        orderRepository.save(order);
        return order;
    }

    public Order getOrderById(String orderId) {
        List<Order> orders = orderRepository.findAll();
        for (Order order : orders) {
            if (order.getId() == Integer.parseInt(orderId))
                return order;
        }

        Order order = new Order();
        order.setBuckwheat("-1");
        return order;
    }

    public Receipt checkPrice() {
        List<Order> orders = orderRepository.findAll();
        for (Order order : orders) {
            if (order.isCalculated()) {
                List<Receipt> receipts = receiptRepository.findAll();
                Receipt myReceipt = new Receipt();
                for (Receipt receipt : receipts) {
                    if (receipt.getOrderid() == order.getId())
                        myReceipt = receipt;
                }
                if (!myReceipt.isPaid())
                    return myReceipt;
            }
        }
        Receipt receipt = new Receipt();
        receipt.setPrice("-1");
        return receipt;
    }
}
