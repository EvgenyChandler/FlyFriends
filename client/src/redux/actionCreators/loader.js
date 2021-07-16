/* eslint-disable import/prefer-default-export */
import { LOADER_FALSE, LOADER_TRUE } from '../types/type'

export const actionLoaderFalse = () => ({
  type: LOADER_FALSE,
})

export const actionLoaderTrue = () => ({
  type: LOADER_TRUE,
})
