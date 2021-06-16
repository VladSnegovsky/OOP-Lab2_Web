package com.lab2.demo.controller;

import com.lab2.demo.service.OrderControllerService;
import com.lab2.demo.service.ReceiptControllerService;
import com.lab2.demo.dto.OrderDTO;
import com.lab2.demo.dto.ReceiptDTO;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
@AllArgsConstructor
public class OrderController {
    private final OrderControllerService orderControllerService;
    private final ReceiptControllerService receiptControllerService;

    @PostMapping(value = "/order")
    public int addOrder(@RequestBody OrderDTO orderDTO) {
        return orderControllerService.addOrder(orderDTO);
    }

    @GetMapping(value = "/order")
    public OrderDTO findUncountedOrderB() {
        return orderControllerService.getUncountedOrders();
    }

    @GetMapping(value = "/redept")
    public ReceiptDTO checkPrice() {
        return orderControllerService.checkPrice();
    }

    @PostMapping(value = "/redept")
    public ReceiptDTO checkPrice(@RequestBody String orderId) {
        return orderControllerService.setPaid(orderId);
    }

    @PostMapping(value = "/part")
    public OrderDTO getOrderById(@RequestBody String orderId) {
        return orderControllerService.getOrderById(orderId);
    }
}
