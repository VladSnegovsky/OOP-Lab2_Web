package com.lab2.demo.service;

import com.lab2.demo.entity.Order;
import com.lab2.demo.OrderConvertToDTOEntity;
import com.lab2.demo.ReceiptConvertToDTOEntity;
import com.lab2.demo.dto.OrderDTO;
import com.lab2.demo.dto.ReceiptDTO;
import com.lab2.demo.repository.OrderRepository;
import com.lab2.demo.service.data.OrderService;
import com.lab2.demo.service.data.ReceiptService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class OrderControllerService {
    private final OrderRepository orderRepository;
    private final OrderService orderService;
    private final ReceiptService receiptService;

    public int addOrder(OrderDTO orderDTO) {
        System.out.println("ADDORDER");
        Order order = OrderConvertToDTOEntity.convertToEntity(orderDTO);
        int id = orderService.addOrder(order);
        return id;
    }

    public OrderDTO getUncountedOrders() {
        System.out.println("GETUNCOUNTEDORDERS");
        Order order = orderService.getUncountedOrders();
        return OrderConvertToDTOEntity.convertToDTO(order);
    }

    public OrderDTO setCalculated(Integer id) {
        System.out.println("SETCALCULATED");
        Order order = orderService.setCalculated(id);
        return OrderConvertToDTOEntity.convertToDTO(order);
    }

    public ReceiptDTO checkPrice() {
        System.out.println("CHECKPRICE");
        return ReceiptConvertToDTOEntity.convertToDTO(this.orderService.checkPrice());
    }

    public OrderDTO getOrderById(String orderId) {
        System.out.println("GETORDERBYID");
        Order order = orderService.getOrderById(orderId);
        return OrderConvertToDTOEntity.convertToDTO(order);
    }

    public ReceiptDTO setPaid(String orderId) {
        receiptService.setPaid(orderId);
        return new ReceiptDTO();
    }
}
