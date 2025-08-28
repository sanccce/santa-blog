export default function () {
  const date = new Date().getFullYear();
  return (
    <>
      <footer className="Footer">
        <p>
          <strong>&copy; Sanccce.com </strong>
          {date}
        </p>
      </footer>
    </>
  );
}
