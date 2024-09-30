import App from "../App";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import store from "../Store";
import { Provider } from "react-redux";

describe("App routing", () => {
  it("renders the Home component at the root path", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByText("Contact Manager")).toBeInTheDocument();
    expect(screen.getByText("React.js application ")).toBeInTheDocument();
    const element = container.querySelector("#contacts");
    expect(element).not.toBeNull();
  });

  it('renders the Add Component at "/add" path', () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/add"]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByText("Contact Manger")).toBeInTheDocument();
    expect(screen.getByText("Rect.js application")).toBeInTheDocument();
    const element = container.querySelector("#addContact");
    expect(element).not.toBeNull();
  });
});


