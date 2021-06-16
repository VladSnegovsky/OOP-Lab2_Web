package com.lab2.demo;

import com.lab2.demo.entity.Order;
import com.lab2.demo.dto.OrderDTO;

public class OrderConvertToDTOEntity {
    public static Order convertToEntity(OrderDTO orderDTO) {
        Order order = new Order();
        order.setCalculated(orderDTO.isCalculated());
        order.setBuckwheat(orderDTO.getBuckwheatQuantity());
        order.setCompote(orderDTO.getCompoteQuantity());
        order.setRice(orderDTO.getRiceQuantity());
        order.setCyberCutlet(orderDTO.getCutletQuantity());
        return order;
    }

    public static OrderDTO convertToDTO(Order order) {
        OrderDTO orderDTO = new OrderDTO();
        orderDTO.setId(String.valueOf(order.getId()));
        orderDTO.setCalculated(order.isCalculated());
        orderDTO.setBuckwheatQuantity(order.getBuckwheat());
        orderDTO.setRiceQuantity(order.getRice());
        orderDTO.setCompoteQuantity(order.getCompote());
        orderDTO.setCutletQuantity(order.getCyberCutlet());
        return orderDTO;
    }
}
