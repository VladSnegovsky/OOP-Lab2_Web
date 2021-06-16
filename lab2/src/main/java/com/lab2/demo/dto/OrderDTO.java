package com.lab2.demo.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class OrderDTO {
    @NotNull(message = "id is required")
    private String id;

    @NotNull(message = "Buckwheat is required")
    private String buckwheatQuantity;

    @NotNull(message = "Rice is required")
    private String riceQuantity;

    @NotNull(message = "Compote is required")
    private String compoteQuantity;

    @NotNull(message = "Cyber Cutlet is required")
    private String cutletQuantity;

    @NotNull
    private boolean calculated;
}
