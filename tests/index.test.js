import ToDoList from "../app/todo/todolist";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import {addTest} from "../app/todo/todolist";


describe("ToDoList", () => {
    it("renders a calculator", () => {
      render(<ToDoList />);
      // check if all components are rendered
       expect(screen.getByTestId("todoText")).toBeInTheDocument();

    //   expect(screen.getByTestId("result")).toBeInTheDocument();
    //   expect(screen.getByTestId("num1")).toBeInTheDocument();
    //   expect(screen.getByTestId("num2")).toBeInTheDocument();
    //   expect(screen.getByTestId("add")).toBeInTheDocument();
    //   expect(screen.getByTestId("subtract")).toBeInTheDocument();
    //   expect(screen.getByTestId("multiply")).toBeInTheDocument();
    //   expect(screen.getByTestId("divide")).toBeInTheDocument();
    });


    it("adds numbers", () => {
        render(<ToDoList />);
        // check if adds properly
        const num1input = screen.getByTestId("num1");
        const num2input = screen.getByTestId("num2");
        const addButton = screen.getByTestId("add");
        const resultArea = screen.getByTestId("result");
        fireEvent.change(num1input, { target: { value: 5 } });
        fireEvent.change(num2input, { target: { value: 8 } });
        fireEvent.click(addButton);
       // addButton.click();
        expect(resultArea).toHaveTextContent("13");
      });
      test('adds 5 + 7 to equal 12', () => {
        expect(addTest(5, 7)).toBe(12);
      });

  });

