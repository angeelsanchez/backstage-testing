import React from 'react';
import { ItemCardGrid, ItemCardHeader } from '@backstage/core-components';
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  styled,
} from '@material-ui/core';
import { Bulletin } from '../../api';
import EditIcon from '@material-ui/icons/Edit';
import { DateTime } from 'luxon';
import DeleteIcon from '@material-ui/icons/Delete';
import { colorVariants } from '@backstage/theme';

export const BulletinCard = (props: any) => {
  const editDialog = (id: string) => {
    props.setCurrentCardId(id);
    props.setEditMode(true);
    props.openDialog();
  };

  const handleDelete = (id: string) => {
    props.deleteCard(id);
  };

  const showcaseCards = () => {
    if (props.selectedFilter) {
      return props.allCards.filter((individualCard: Bulletin) =>
        individualCard.bulletin_tags.includes(props.selectedFilter),
      );
    } else {
      return props.getCardsOnPage();
    }
  };
  const siteElements = showcaseCards().map((individualCard: Bulletin) => (
    <Card key={individualCard.bulletin_id}>
      <CardMedia>
        <ItemCardHeader
          title={individualCard.bulletin_title}
          subtitle={`updated ${DateTime.fromISO(
            new Date(individualCard.updated_at!).toISOString(),
          ).toRelative({
            base: DateTime.now(),
          })}`}
        />
      </CardMedia>
      <CardContent>
        <Typography>{individualCard.bulletin_description}</Typography>
      </CardContent>
      <CardContent>
        {/* Añado el comentario a la carta */}
        <Typography>{individualCard.bulletin_comment}</Typography>
      </CardContent>
      <CardContent>{props.tags(individualCard.bulletin_tags)}</CardContent>
      <CardActions>
        <IconButton
          onClick={() => editDialog(individualCard.bulletin_id)}
          id="editButton"
        >
          <EditIcon />
        </IconButton>
        <IconButton
          color="secondary"
          onClick={() => handleDelete(individualCard.bulletin_id)}
        >
          <DeleteIcon />
        </IconButton>
        <Button
          color="primary"
          variant="contained"
          href={
            individualCard.bulletin_url.startsWith('http')
              ? individualCard.bulletin_url
              : `//${individualCard.bulletin_url}`
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          Abrir URL
        </Button>
      </CardActions>
    </Card>
  ));

  return <ItemCardGrid>{siteElements}</ItemCardGrid>;
};
