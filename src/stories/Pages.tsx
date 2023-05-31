import React from "react";

import { Header } from "./Header";
import "./page.css";

type User = {
  name: string;
};

export const Pages: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: "Jane Doe" })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: "Jane Doe" })}
      />

      <section className="storybook-page">
        <h2>Pages custom Page</h2>
        <div className="scss-container">
          <p>Home Page added</p>
        </div>
        <div className="new-container">
          <p>Home Page added</p>
        </div>
      </section>
    </article>
  );
};
