"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, Fragment } from "react";

const AllProviders = ({ children }: PropsWithChildren) => {
  const client = new QueryClient();

  return (
    <Fragment>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </Fragment>
  );
};

export default AllProviders;
