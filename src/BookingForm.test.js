import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm"; // corrected path

test("shows error when name is empty", () => {
  render(<BookingForm />);
  fireEvent.submit(screen.getByRole("button", { name: /reserve/i }));
  expect(screen.getByText(/name is required/i)).toBeInTheDocument();
});
