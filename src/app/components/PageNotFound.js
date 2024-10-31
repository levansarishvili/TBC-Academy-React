import Button from "./buttons/Button";
import Link from "next/link";

export default function PageNotFound() {
  return (
    <div className="page-not-found-wrapper mx-auto my-32 flex flex-col items-center justify-center text-center gap-8 border rounded-2xl max-w-[50rem] w-full px-32 py-16 transition-all duration-300 hover:shadow-lg">
      <svg
        className="not-found-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        fill="#868e96"
        viewBox="0 0 256 256"
      >
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.08,64a8,8,0,1,1-13.84,8c-7.47-12.91-19.21-20-33.08-20s-25.61,7.1-33.08,20a8,8,0,1,1-13.84-8c10.29-17.79,27.39-28,46.92-28S164.63,154.2,174.92,172Z"></path>
      </svg>
      <h1 className="section-header text-2xl font-medium">404</h1>

      <p className="not-found-text text-xl font-medium">
        We are sorry, but the page you requested was not found.
      </p>

      <Link href="/">
        <Button className="btn" name="Back to home" />
      </Link>
    </div>
  );
}
