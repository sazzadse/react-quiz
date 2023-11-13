import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

export default function SignupForm() {
  const [username, SetUsername] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [confirmPassword, SetConfirmPassword] = useState("");
  const [agree, SetAgree] = useState("");

  const [error, SetError] = useState();
  const [loading, setLoading] = useState();

  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) return SetError("Password don't match!");

    try {
      SetError("");
      setLoading(true);
      await signup(email, password, username);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      SetError("Failed to signup!");
    }
  }

  return (
    <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        required
        placeholder="Enter name"
        icon="person"
        value={username}
        onChange={(e) => SetUsername(e.target.value)}
      />

      <TextInput
        type="text"
        required
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        onChange={(e) => SetEmail(e.target.value)}
      />

      <TextInput
        type="password"
        required
        placeholder="Enter password"
        icon="lock"
        value={password}
        onChange={(e) => SetPassword(e.target.value)}
      />

      <TextInput
        type="password"
        required
        placeholder="Confirm password"
        icon="lock_clock"
        value={confirmPassword}
        onChange={(e) => SetConfirmPassword(e.target.value)}
      />

      <Checkbox
        required
        text="I agree to the Terms &amp; Conditions"
        value={agree}
        onChange={(e) => SetAgree(e.target.value)}
      />

      <Button disabled={loading} type="submit">
        <span>Submit Now</span>
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
}
