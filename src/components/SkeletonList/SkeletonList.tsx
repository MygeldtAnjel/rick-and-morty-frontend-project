import { Skeleton, Grid, Box } from '@mui/material';

interface SkeletonListProps {}

const SkeletonList: React.FC<SkeletonListProps> = () => {
    return (
        <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 12 }}>
            {Array.from(new Array(20)).map((_item,index) => (
                <Grid item xs={3} key={index}>
                    <Skeleton variant="rectangular" width="100%" height={220} />
                    <Box marginTop={1}>
                        <Skeleton variant="rectangular" width="100%" height={40} />
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};

export default SkeletonList;