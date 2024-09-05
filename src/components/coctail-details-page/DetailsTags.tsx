import { Box, Chip, Stack, Typography } from "@mui/material";

type TagsProps = {
  tags: string | null;
};

const DetailsTags = ({ tags }: TagsProps) => {
  if (!tags) return null;

  const tagElements = tags.split(",").map((tag) => tag.trim());

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Tags:
      </Typography>
      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
        {tagElements.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            sx={{ m: "5px", color: "#fff", backgroundColor: "#2f2f2f" }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default DetailsTags;
