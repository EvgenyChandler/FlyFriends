import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import { Box, Paper } from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase'
import Search from '@material-ui/icons/Search'
import { useSearchInputStyles } from '@mui-treasury/styles/input/search'
import useStyles from './searchFriendStyle'
import AddFriendAvatar from './AddFriendAvatar/AddFriendAvatar'
import { sagaSearchFriendsAC, searchFriendsAC } from '../../../../redux/actionCreators/searchFriendsAC'

export default function SearchFriend() {
  const classes = useStyles()
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const searchFriends = useSelector((state) => state.lkSearchFriend)

  useEffect(() => {
    dispatch(searchFriendsAC([]))
  }, [])

  const searchHandler = (e) => {
    setSearch(e.target.value)
    dispatch(sagaSearchFriendsAC(e.target.value))
  }

  const SearchInput = () => {
    const styles = useSearchInputStyles()
    return (
      <InputBase
        classes={styles}
        placeholder="Поиск друзей..."
        startAdornment={<Search />}
        value={search}
        onChange={searchHandler}
        autoFocus
        style={{
          backgroundColor: 'rgb(198, 160, 234, 0.5)',
        }}
      />
    )
  }

  return (
    <Grid item xs={12}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Box>
          <Paper elevation={3} square="true">
            <Box container spacing={1} alignItems="flex-end">
              <SearchInput />
            </Box>

          </Paper>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          className={classes.boxSearchFriend}
        >
          {searchFriends.map((friend) => <AddFriendAvatar friend={friend} />)}
        </Box>

      </Box>
    </Grid>
  )
}
