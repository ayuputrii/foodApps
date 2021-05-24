export default {
  viewContainer: (paddingHorizontal, paddingVertical) => ({
    marginTop: 10,
    flexDirection: 'row',
    paddingHorizontal: paddingHorizontal,
    paddingVertical: paddingVertical,
    alignItems: 'center',
    backgroundColor: 'white',
  }),
  imageContent: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
    overflow: 'hidden',
  },
  viewContent: {
    flexDirection: 'column',
    flex: 1,
  },
  textMenuContent: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#22211f',
  },
  subTextMenuContent: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  textItems: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
};
