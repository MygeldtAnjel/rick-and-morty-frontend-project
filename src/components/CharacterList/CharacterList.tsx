import { Grid, Card, CardMedia, Typography, Box } from '@mui/material';
import { Character } from "@/models/character";

interface CharacterListProps {
  characters: Character[],
}

const CharacterList: React.FC<CharacterListProps> = ({characters}) => {
  return (
    <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 12 }}>
      {characters.map((character) => (
        <Grid item xs={3} key={character.id}>
          <Card sx={{ maxWidth: "100%" }}>
            <CardMedia
              component="img"
              height="220"
              image={character.image}
              alt="green iguana"
            />
          </Card>
          <Box mt="5px">
            <Typography align="center" color="primary" gutterBottom variant="h6" component="div">
              {character.name}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default CharacterList;