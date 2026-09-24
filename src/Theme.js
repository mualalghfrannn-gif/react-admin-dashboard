export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // إعدادات الوضع الفاتح
        }
      : {
          background: {
            default: '#000000', // خلفية سوداء للوضع المظلم
            paper: '#121212',
          },
        }),
  },
});