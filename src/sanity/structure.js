export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('project').title('Projects'),
      S.documentTypeListItem('homelab').title('Homelab Equipment'),
      ...S.documentTypeListItems().filter(
        (listItem) => !['project', 'homelab'].includes(listItem.getId())
      ),
    ])
