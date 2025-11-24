export default function NotFound() {
  return (
    <main
      style={{
        width: "100vw",
        maxHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Ой! Что-то сломалось :/</h1>
      <a href="/">Вернуться на главную страницу</a>
    </main>
  );
}
