import LayoutContainer from "@/layout"
import GlobalErrorBoundary from "@/components/GlobalErrorBoundary"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <GlobalErrorBoundary showStackTrace={process.env.NODE_ENV === "development"}>
      <LayoutContainer>{children}</LayoutContainer>
    </GlobalErrorBoundary>
  )
}
