import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Food Fusion')
    .items([
      S.documentTypeListItem('topSellingItem').title('Top Selling Items'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['topSellingItem'].includes(item.getId()!),
      ),
    ])
