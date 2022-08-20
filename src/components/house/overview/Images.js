import React from 'react';
import {Box, Button, Dialog, IconButton, ImageList, ImageListItem, Slide} from "@mui/material";
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import CloseIcon from '@mui/icons-material/Close';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const Images = ({images}) => {
    const length = Object.keys(images).length;

    return (
        <>
            {(length === 1 || length === 0) ?
            (
                <>

                </>
            ): null}
            {(length === 2) ?
                (
                    <ImageList sx={{ width: 1200, height: 'auto', borderRadius: 5 }} cols={2} rowHeight={400}>
                        {images.slice(0,2).map((item, key) => (
                            <ImageListItem key={item.img} >
                                <img
                                    src={item}
                                    srcSet={item}
                                    alt={key}
                                    loading="lazy"
                                    style={{objectFit: 'cover'}}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
            ): null}
            {(length === 3 || length === 4) ?
                (
                    <ImageList
                        sx={{ width: 1200, height: 'auto', borderRadius: 5 }}
                        variant="quilted"
                        cols={4}
                        rowHeight={100}
                    >
                        <ImageListItem cols={2} rows={4}>
                            <img
                                {...srcset(images[0], 580 , 2, 4)}
                                alt={"0"}
                                loading="lazy"
                                style={{objectFit: 'cover'}}
                            />
                        </ImageListItem>
                        <ImageListItem cols={2} rows={2}>
                            <img
                                {...srcset(images[1], 580 ,2, 2)}
                                alt={"1"}
                                loading="lazy"
                                style={{objectFit: 'cover'}}
                            />
                        </ImageListItem>
                        <ImageListItem cols={2} rows={2}>
                            <img
                                {...srcset(images[2], 580 , 2, 2)}
                                alt={"2"}
                                loading="lazy"
                                style={{objectFit: 'cover'}}
                            />
                        </ImageListItem>
                    </ImageList>
            ): null}
            {(length >= 5) ?
                (
                    <ImageList
                        sx={{ width: 1200, height: 'auto', borderRadius: 5 }}
                        variant="quilted"
                        cols={4}
                        rowHeight={90}
                    >
                        <ImageListItem cols={2} rows={4}>
                            <img
                                {...srcset(images[0], 580 , 2, 4)}
                                alt={"0"}
                                loading="lazy"
                                style={{objectFit: 'cover'}}
                            />
                        </ImageListItem>
                        <ImageListItem cols={1} rows={2}>
                            <img
                                {...srcset(images[1], 580 ,1, 1)}
                                alt={"1"}
                                loading="lazy"
                                style={{objectFit: 'cover'}}
                            />
                        </ImageListItem>
                        <ImageListItem cols={1} rows={2}>
                            <img
                                {...srcset(images[2], 580 , 1, 1)}
                                alt={"2"}
                                loading="lazy"
                                style={{objectFit: 'cover'}}
                            />
                        </ImageListItem>
                        <ImageListItem cols={1} rows={2}>
                            <img
                                {...srcset(images[1], 580 ,1, 1)}
                                alt={"1"}
                                loading="lazy"
                                style={{objectFit: 'cover'}}
                            />
                        </ImageListItem>
                        <ImageListItem cols={1} rows={2}>
                            <img
                                {...srcset(images[2], 580 , 1, 1)}
                                alt={"2"}
                                loading="lazy"
                                style={{objectFit: 'cover'}}
                            />
                        </ImageListItem>
                    </ImageList>
            ): null}
        </>
    );
};

export default Images;