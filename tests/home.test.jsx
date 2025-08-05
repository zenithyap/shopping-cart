import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import Home from "../src/Components/Home"

describe("Home component", () => {
    it("Renders correct heading", () => {
        render(<Home />);
        expect(screen.getByRole("heading", {name: "Shoply"}));
    });

    it("Renders correct description", () => {
        render(<Home />);
        expect(screen.getByRole("heading", {name: "The best shopping site ever created!"}));
    });

    it("Renders correct shop button", () => {
        render(<Home />);
        expect(screen.getByRole("button", {name: "Shop Now"}));
    });
});