package com.lab2.demo.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ReceiptDTO {
    @NotNull
    private int orderid;

    @NotNull
    private int price;

    @NotNull
    private boolean paid;
}
