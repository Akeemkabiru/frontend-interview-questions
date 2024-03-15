export const LoginPage = () => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="email" onChange={handleEmailChange} value={email} />
        <input
          type="password"
          name=""
          id=""
          onChange={handlePasswordChange}
          value={password}
        />
      </form>
    </div>
  );
};
