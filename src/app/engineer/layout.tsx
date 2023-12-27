import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jerry's portfolio | Engineer",
  description: "Jerry Nguyen portfolio's engineer page",
};

export default function EngineerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
