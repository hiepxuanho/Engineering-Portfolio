export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('project').title('Projects'),
      ...S.documentTypeListItems().filter(
        (listItem) => !['project'].includes(listItem.getId())
      ),
    ])
