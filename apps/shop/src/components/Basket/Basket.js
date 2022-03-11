import {
  ButtonQuantity,
  AppBar,
  Box,
  Toolbar,
  Grid,
  Divider,
  Typography,
  Card,
  Paper,
  CardMedia,
  Button,
  Container,
  ButtonGroup,
  IconButton,
  CloseIcon,
  CardContent,
} from '@allplants/shared/ui';

export default function Basket({ onCloseClick }) {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <ButtonGroup
              variant="text"
              aria-label="text button group"
              color="secondary"
            >
              <Button>For One</Button>
              <Button>For Two</Button>
            </ButtonGroup>
          </Box>
          <IconButton
            color="inherit"
            aria-label="upload picture"
            component="span"
            onClick={onCloseClick}
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container sx={{ backgroundColor: 'mushroom.main' }}>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          sx={{ backgroundColor: 'mushroom.main' }}
        >
          <Grid item>
            <Typography variant="h6" component="div" gutterBottom>
              Meals (6/6)
            </Typography>

            {Array.from(Array(3)).map((_, index) => (
              <Grid item key={index}>
                <Card sx={{ display: 'flex' }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 80 }}
                    image="https://allplants.com/_next/image?url=https%3A%2F%2Fafsuvcxqen.cloudimg.io%2Fv7%2Fpim.allplants.com%2Fmedia%2Fcache%2Fpreview%2F1%2F3%2F8%2Fc%2F138cde3d2d1babfeeef0f6e802de27a58ec27133_Dishes_Badges_Mac___Greens__1_.jpg&w=750&q=75"
                    alt="Live from space album cover"
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      flexGrow: 1,
                      justifyContent: 'space-between',
                      backgroundColor: 'mushroom.main',
                    }}
                  >
                    <CardContent sx={{ backgroundColor: 'mushroom.main' }}>
                      <Typography variant="body1">Live From Space</Typography>
                    </CardContent>
                    <ButtonQuantity />
                  </Box>
                </Card>
              </Grid>
            ))}

            <Typography variant="h6" gutterBottom>
              Extras (1/9)
            </Typography>

            {Array.from(Array(1)).map((_, index) => (
              <Grid item key={index}>
                <Card sx={{ display: 'flex' }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 80 }}
                    image="https://allplants.com/_next/image?url=https%3A%2F%2Fafsuvcxqen.cloudimg.io%2Fv7%2Fpim.allplants.com%2Fmedia%2Fcache%2Fpreview%2F1%2F3%2F8%2Fc%2F138cde3d2d1babfeeef0f6e802de27a58ec27133_Dishes_Badges_Mac___Greens__1_.jpg&w=750&q=75"
                    alt="Live from space album cover"
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      flexGrow: 1,
                      justifyContent: 'space-between',
                      backgroundColor: 'mushroom.main',
                    }}
                  >
                    <CardContent sx={{ backgroundColor: 'mushroom.main' }}>
                      <Typography>Live From Space</Typography>
                    </CardContent>
                    <ButtonQuantity />
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Grid item>
            <Paper elevation={0} sx={{ backgroundColor: 'mushroom.main' }}>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Typography>Subtotal</Typography>
                </Grid>
                <Grid item>
                  <Typography>£35.52</Typography>
                </Grid>
              </Grid>
              <Box my={1}>
                <Divider />
              </Box>
              <Button variant="contained" fullWidth>
                Next
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
