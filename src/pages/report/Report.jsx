// import React from 'react'

// const Report = () => {
//   return (
//     <div>
//       This is Report Page 
//     </div>
//   )
// }

// export default Report

import React, { useState } from "react";
import { RichTextEditor } from "@mantine/rte";
import { Box, Title, Paper } from "@mantine/core";

const Report = () => {
  const [value, setValue] = useState("");

  return (
    <Box style={{ maxWidth: 900, margin: "40px auto" }}>
      <Title order={2} style={{ marginBottom: 20 }}>
        Rich Text Report Editor
      </Title>

      <Paper shadow="sm" p="md" radius="md" style={{ marginBottom: 30 }}>
        <RichTextEditor
          value={value}
          onChange={setValue}
          placeholder="Type your report here..."
          controls={[
            ["bold", "italic", "underline", "strike"],
            ["h1", "h2", "h3"],
            ["unorderedList", "orderedList"],
            ["alignLeft", "alignCenter", "alignRight"],
            ["link", "image"],
            ["undo", "redo"],
          ]}
          style={{ minHeight: 350 }}
        />
      </Paper>

      <Title order={3} style={{ marginBottom: 10 }}>
        Preview:
      </Title>
      <Paper shadow="xs" p="md" radius="md" style={{ minHeight: 200 }}>
        <div dangerouslySetInnerHTML={{ __html: value }} />
      </Paper>
    </Box>
  );
};

export default Report;

