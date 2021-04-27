using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kenkata_5.Models
{
    public class ProductModel
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public string ShortDescription { get; set; }
        public string LongDescription { get; set; }
        public int Price { get; set; }
        public int Discount { get; set; }
        public bool Status { get; set; }
        public string Color { get; set; }
        public string Category { get; set; }
        public string Size { get; set; }
        public string Brand { get; set; }
        public string Image { get; set; }

        public ProductModel()
        {

        }

        public ProductModel(int id, string productName, string shortDescription, string longDescription, int price, int discount, bool status, string color, string category, string size, string brand, string image)
        {
            Id = id;
            ProductName = productName;
            ShortDescription = shortDescription;
            LongDescription = longDescription;
            Price = price;
            Discount = discount;
            Status = status;
            Color = color;
            Category = category;
            Size = size;
            Brand = brand;
            Image = image;
        }
    }
}
