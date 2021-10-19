import * as React from "react";
import MuiButton from "@mui/material/Button";
import styled from "styled-components";
import useCategoryHook from "../hooks/useCategoryHook";

const Categories = ["All", "Environment", "City", "Animal"];

const Button = styled(MuiButton)`
    border-radius: 0px;
    border-right-width: 0;

    &:first-of-type {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }
    &:last-of-type {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;

        border-right-width: 1px;
    }

    &:hover:not(&:last-of-type) {
        & + Button {
            border-left-width: 0;
        }
    }
`;

export default function CategorySelector() {
    const [selectedCategory, setSelectedCategory] = useCategoryHook();

    const onClickCategory = (e, categoryId) => {
        setSelectedCategory(categoryId);
    };

    return Categories.map((category, idx) => {
        return (
            <Button
                variant={idx === selectedCategory ? "contained" : "outlined"}
                onClick={(e) => onClickCategory(e, idx)}
                key={idx}
                color="success"
                size="small"
            >
                {category}
            </Button>
        );
    });
}
