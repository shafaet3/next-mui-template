import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import * as React from "react";
import Copyright from "../src/Copyright";
import Link from "../src/Link";

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Link href="/my-form" color="secondary">
          React Hook Form Component
        </Link>
        <Copyright />
      </Box>
    </Container>
  );
}
