import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store'; // Импортируй RootState из твоего store

// Создаём slice для modalTrailer
const modalTrailerSlice = createSlice({
  name: 'modalTrailer',
  initialState: {
    isOpen: false, // Начальное состояние modalTrailer
  },
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    toggleModal: (state) => {
      state.isOpen = !state.isOpen; // Переключаем состояние
    },
  },
});

// Экспортируем экшен
export const { toggleModal,openModal,closeModal } = modalTrailerSlice.actions;

// Экспортируем редьюсер
export const modalTrailerReducer = modalTrailerSlice.reducer;

// Селектор для получения состояния модального окна
export const selectModalTrailer = (state: RootState) => state.modalTrailer.isOpen;
