-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS "CumRaps_id_seq"

-- Table Definition
CREATE TABLE "public"."CumRaps" (
    "id" int4 NOT NULL DEFAULT nextval('"CumRaps_id_seq"'::regclass),
    "TenCum" varchar NOT NULL,
    "DiaChi" varchar NOT NULL,
    "Maps" text NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."DatChos" (
    "MaDatCho" uuid NOT NULL,
    "ThoiDiemDatVe" timestamptz,
    "TongTien" int4 NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "UserId" int4,
    "SuatChieuId" int4,
    CONSTRAINT "DatChos_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "public"."Users"("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "DatChos_SuatChieuId_fkey" FOREIGN KEY ("SuatChieuId") REFERENCES "public"."SuatChieus"("id") ON DELETE SET NULL ON UPDATE CASCADE,
    PRIMARY KEY ("MaDatCho")
);

-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS "Phims_id_seq"

-- Table Definition
CREATE TABLE "public"."Phims" (
    "id" int4 NOT NULL DEFAULT nextval('"Phims_id_seq"'::regclass),
    "Ten" varchar NOT NULL,
    "NgayCongChieu" timestamptz NOT NULL,
    "Poster" varchar NOT NULL,
    "TraiLers" varchar NOT NULL,
    "ThoiLuong" int4 NOT NULL,
    "DaoDien" varchar NOT NULL,
    "DienVien" varchar NOT NULL,
    "TheLoai" varchar NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS "Raps_id_seq"

-- Table Definition
CREATE TABLE "public"."Raps" (
    "id" int4 NOT NULL DEFAULT nextval('"Raps_id_seq"'::regclass),
    "TenRap" varchar NOT NULL,
    "LoaiRap" varchar NOT NULL,
    "KTNgang" int4 NOT NULL,
    "KTDoc" int4 NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "CumRapId" int4
);

-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS "SuatChieus_id_seq"

-- Table Definition
CREATE TABLE "public"."SuatChieus" (
    "id" int4 NOT NULL DEFAULT nextval('"SuatChieus_id_seq"'::regclass),
    "ThoiDiemBatDau" varchar,
    "ThoiDiemKetThuc" varchar,
    "GiaVe" int4,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "PhimId" int4,
    "RapId" int4
);

-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS "Users_id_seq"

-- Table Definition
CREATE TABLE "public"."Users" (
    "id" int4 NOT NULL DEFAULT nextval('"Users_id_seq"'::regclass),
    "Email" varchar NOT NULL,
    "Password" varchar NOT NULL,
    "Name" varchar NOT NULL,
    "Phone" int4 NOT NULL,
    "UserType" int4 NOT NULL,
    "TokenUser" text,
    "Verify" int4,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL
);

-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Ves" (
    "MaVe" uuid NOT NULL,
    "MaGhe" varchar NOT NULL,
    "DiaChiNgang" varchar NOT NULL,
    "DiaChiDoc" varchar NOT NULL,
    "GiaTien" int4 NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "DatChoMaDatCho" uuid
);

INSERT INTO "public"."CumRaps" ("id", "TenCum", "DiaChi", "Maps", "createdAt", "updatedAt") VALUES
(2, 'CGV Vivo City', 'Lầu 5, Trung tâm thương mại SC VivoCity - 1058 Nguyễn Văn Linh, Quận 7', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15680.220485844315!2d106.7033975!3d10.7302321!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x11f8c4c9b629e2cf!2sSC%20VivoCity!5e0!3m2!1svi!2s!4v1626751860636!5m2!1svi!2s', '2021-07-18 10:56:55.73636+07', '2021-07-18 10:56:55.73636+07');
INSERT INTO "public"."CumRaps" ("id", "TenCum", "DiaChi", "Maps", "createdAt", "updatedAt") VALUES
(1, 'CGV Hùng Vương Plaza', 'Tầng 7 | Hùng Vương Plaza 126 Hùng Vương Quận 5 Tp. Hồ Chí Minh', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15678.68845226113!2d106.64092014999999!3d10.75973355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ef05f38e56b%3A0x1f8850db32555ade!2zVOG6p25nIDcsIFBhcmtzb24gSHVuZyBWdW9uZyBQbGF6YSwgMTI2IMSQxrDhu51uZyBIw7luZyBWxrDGoW5nLCBwaMaw4budbmcgMTIsIFF14bqtbiA1LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1626751759343!5m2!1svi!2s', '2021-07-18 10:56:55.73636+07', '2021-07-18 10:56:55.73636+07');
INSERT INTO "public"."CumRaps" ("id", "TenCum", "DiaChi", "Maps", "createdAt", "updatedAt") VALUES
(4, 'CGV Hoàng Văn Thụ', 'Tầng 1 và 2, Gala Center, số 415, Hoàng Văn Thụ, Phường 2, Quận Tân Bình, TPHCM', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.654426034853!2d106.6599754!3d10.7987785!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x539680a498dd4d26!2zVHJ1bmcgdMOibSBI4buZaSBuZ2jhu4sgJiBUaeG7h2MgY8aw4bubaSBHYWxh!5e0!3m2!1svi!2s!4v1626752041647!5m2!1svi!2s', '2021-07-18 10:56:55.73636+07', '2021-07-18 10:56:55.73636+07');
INSERT INTO "public"."CumRaps" ("id", "TenCum", "DiaChi", "Maps", "createdAt", "updatedAt") VALUES
(5, 'CGV Sư Vạn Hạnh', 'Tầng 6, Vạn Hạnh Mall, 11 Sư Vạn Hạnh, Phường 12, Quận 10', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12808.260808185532!2d106.66416537611667!3d10.773023859635648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752edddb818ebf%3A0xfc8c05045f47a3d8!2zVHJ1bmcgVMOibSBUaMawxqFuZyBN4bqhaSBW4bqhbiBI4bqhbmg!5e0!3m2!1svi!2s!4v1626752289258!5m2!1svi!2s', '2021-07-18 10:56:55.73636+07', '2021-07-18 10:56:55.73636+07'),
(6, 'CGV Lý Chính Thắng', 'Tầng 3, 83 Lý Chính Thắng, Phường 8, Q.3, TP.HCM', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.288550509726!2d106.68337661480076!3d10.78919779231281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2d25bce65b%3A0xa5cbd5e1c3eada5f!2zVOG6p25nIDMsIDgzIEzDvSBDaMOtbmggVGjhuq9uZywgcGjGsOG7nW5nIDgsIFF14bqtbiAzLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1626752350902!5m2!1svi!2s', '2021-07-18 10:56:55.73636+07', '2021-07-18 10:56:55.73636+07'),
(7, 'CGV Crescent Mall', 'Lầu 5, Crescent Mall Đại lộ Nguyễn Văn Linh, Phú Mỹ Hưng Quận 7 TP. Hồ Chí Minh', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15680.31193411817!2d106.7188502!3d10.7284686!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6c098e537ce0abe!2sCrescent%20Mall!5e0!3m2!1svi!2s!4v1626752414246!5m2!1svi!2s', '2021-07-18 10:56:55.73636+07', '2021-07-18 10:56:55.73636+07'),
(8, 'CGV Pearl Plaza', 'Tầng 5, Pearl Plaza, 561A Điện Biên Phủ, P.25, Q.Bình Thạnh, TP.HCM', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.58624393848!2d106.7185994!3d10.8000849!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7693223c6cc5a100!2sCGV%20Pearl%20Plaza!5e0!3m2!1svi!2s!4v1626752524398!5m2!1svi!2s', '2021-07-18 10:56:55.73636+07', '2021-07-18 10:56:55.73636+07'),
(9, 'CGV Pandora City', 'Lầu 3, Pandora City 1/1 Trường Chinh Quận Tân Phú TP. Hồ Chí Minh', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.246710066556!2d106.6342621!3d10.8065882!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4012c0c89a5b6635!2sCGV%20Pandora%20City!5e0!3m2!1svi!2s!4v1626752657528!5m2!1svi!2s', '2021-07-20 10:49:40.672343+07', '2021-07-20 10:49:40.672343+07'),
(10, 'CGV Aeon Bình Tân', 'Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân, TPHCM', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15679.570944704492!2d106.6119309!3d10.7427497!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf53f7643a9134531!2zQUVPTiBNQUxMIELDrG5oIFTDom4!5e0!3m2!1svi!2s!4v1626752723275!5m2!1svi!2s', '2021-07-20 10:49:40.672343+07', '2021-07-20 10:49:40.672343+07'),
(11, 'CGV Vincom Center Landmark 81', 'Tầng B1 , TTTM Vincom Center Landmark 81, 772 Điện Biên Phủ, P.22, Q. Bình Thạnh, HCM', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.870176163977!2d106.7221662!3d10.7946436!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x25f815f86c6d39c1!2sVincom%20Center%20Landmark%2081!5e0!3m2!1svi!2s!4v1626752771425!5m2!1svi!2s', '2021-07-20 10:49:40.672343+07', '2021-07-20 10:49:40.672343+07'),
(12, 'CGV Thảo Điền Pearl', 'Tầng 2, Thảo Điền Mall, 12 Quốc Hương, Phường Thảo Điền, Quận 2, TP. Hồ Chí Minh', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.512677047724!2d106.7332862!3d10.8014943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xca45e9df7b7cff4c!2zVGjhuqNvIMSQaeG7gW4gUGVhcmw!5e0!3m2!1svi!2s!4v1626752895638!5m2!1svi!2s', '2021-07-20 10:49:40.672343+07', '2021-07-20 10:49:40.672343+07'),
(13, 'CGV Liberty Citypoint', 'Tầng M - 1, khách sạn Liberty Center Saigon Citypoint, 59 - 61 Pasteur, Quận 1', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15677.91073171523!2d106.7006634!3d10.7746791!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x76720b1358eb9260!2zS2jDoWNoIHPhuqFuIExpYmVydHkgQ2VudHJhbCBTw6BpIEfDsm4gQ2l0eSBQb2ludA!5e0!3m2!1svi!2s!4v1626752942387!5m2!1svi!2s', '2021-07-20 10:49:40.672343+07', '2021-07-20 10:49:40.672343+07'),
(3, 'CGV Trường Sơn (CGV CT Plaza)', 'Tầng 10, Tòa nhà Vietjet Plaza, 60A Trường Sơn, P.2, Q. Tân Bình, TP.HCM, Việt Nam', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15675.908850224414!2d106.6655556!3d10.8130556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaf95c7444b843c70!2zQ0dWIFRyxrDhu51uZyBTxqFuIChDR1YgQ1QgUGxhemEp!5e0!3m2!1svi!2s!4v1626751969340!5m2!1svi!2s', '2021-07-18 10:56:55.73636+07', '2021-07-18 10:56:55.73636+07'),
(14, 'CGV Aeon Tân Phú', 'Lầu 3, Aeon Mall 30 Bờ Bao Tân Thắng, P. Sơn Kỳ Quận Tân Phú TP. Hồ Chí Minh', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9321.341725035929!2d106.61423185274072!3d10.80047880952919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b9535b60699%3A0x4737f3be8bd41d5b!2zQUVPTiBNQUxMIFTDgk4gUEjDmg!5e0!3m2!1svi!2s!4v1626756239590!5m2!1svi!2s', '2021-07-20 11:46:38.964+07', '2021-07-20 11:46:38.964+07');

INSERT INTO "public"."DatChos" ("MaDatCho", "ThoiDiemDatVe", "TongTien", "createdAt", "updatedAt", "UserId", "SuatChieuId") VALUES
('b6ea1030-e915-11eb-a9a1-73f179097afd', '2021-07-20 11:48:23.731+07', 180000, '2021-07-20 11:48:23.731+07', '2021-07-20 11:48:23.731+07', 12, 49);


INSERT INTO "public"."Phims" ("id", "Ten", "NgayCongChieu", "Poster", "TraiLers", "ThoiLuong", "DaoDien", "DienVien", "TheLoai", "createdAt", "updatedAt") VALUES
(2, 'The Avengers: Biệt đội siêu anh hùng', '2021-07-02 16:30:28.502172+07', 'NULL', 'https://www.youtube.com/watch?v=eOrNdBpGMv8&ab_channel=MarvelEntertainment', 133, 'Joss Whedon', ' Scarlett Johansson, Samuel l. Jackson, Jeremy Renner, Chris Evans, Mark Ruffalo, Chris Hem,...', 'Siêu anh hùng viễn tưởng', '2021-07-02 16:30:28.502172+07', '2021-07-02 16:30:28.502172+07');
INSERT INTO "public"."Phims" ("id", "Ten", "NgayCongChieu", "Poster", "TraiLers", "ThoiLuong", "DaoDien", "DienVien", "TheLoai", "createdAt", "updatedAt") VALUES
(3, 'Iron Man 3', '2021-07-02 16:34:55.199629+07', 'NULL', 'https://www.youtube.com/watch?v=Ke1Y3P9D0Bc&ab_channel=MarvelUK', 130, 'Shane Black', ' Don Cheadle, Miguel Ferrer, William Sadler, James Badge Dale, Rebecca Hall', 'Siêu anh hùng viễn tưởng', '2021-07-02 16:34:55.199629+07', '2021-07-02 16:34:55.199629+07');
INSERT INTO "public"."Phims" ("id", "Ten", "NgayCongChieu", "Poster", "TraiLers", "ThoiLuong", "DaoDien", "DienVien", "TheLoai", "createdAt", "updatedAt") VALUES
(4, 'The Dark World (Thần sấm 2: Thế giới bóng tối)', '2021-07-02 16:34:55.199629+07', 'NULL', 'https://www.youtube.com/watch?v=jHFhZLJajlc&ab_channel=MovieclipsTrailers', 112, 'Alan Taylor.', 'Tadanobu Asano, Chris Hemsworth, Kat Dennings, Natalie Portman, Christopher Eccleston,...', 'Siêu anh hùng viễn tưởng', '2021-07-02 16:34:55.199629+07', '2021-07-02 16:34:55.199629+07');
INSERT INTO "public"."Phims" ("id", "Ten", "NgayCongChieu", "Poster", "TraiLers", "ThoiLuong", "DaoDien", "DienVien", "TheLoai", "createdAt", "updatedAt") VALUES
(5, 'Avengers: Age of Ultron (Avengers: Đế chế Ultron)', '2021-07-02 16:40:55.200937+07', 'NULL', 'https://www.youtube.com/watch?v=tmeOjFno6Do&ab_channel=MarvelEntertainment', 141, 'Joss Whedon.', 'Robert Downey, Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Jeremy Renner, Samuel L. Jackson,...', 'Siêu anh hùng viễn tưởng', '2021-07-02 16:40:55.200937+07', '2021-07-02 16:40:55.200937+07'),
(6, 'Doctor Strange (Phù thủy tối thượng)', '2021-07-02 16:40:55.200937+07', 'NULL', 'https://www.youtube.com/watch?v=HSzx-zryEgM&ab_channel=MarvelEntertainment', 115, 'Scott Derrickson.', ' Benedict Cumberbatch, Chiwetel Ejiofor, Rachel McAdams, Benedict Wong, Michael Stuhlbarg, Benjamin Bratt, Scott Adkins, Mads Mikkelsen và Tilda Swinton,...', 'Siêu anh hùng viễn tưởng', '2021-07-02 16:40:55.200937+07', '2021-07-02 16:40:55.200937+07'),
(9, 'Spider-Man: Homecoming (Người nhện: Trở về nhà)', '2021-07-02 16:53:08.781338+07', 'NULL', 'https://www.youtube.com/watch?v=n9DwoQ7HWvI&ab_channel=MovieclipsTrailers', 133, 'Jon Watts.', 'Tom Holland, Michael Keaton, Jon Favreau, Zendaya, Donald Glover, Tyne Daly, Marisa Tomei, và Robert Downey Jr,...', 'Siêu anh hùng viễn tưởng', '2021-07-02 16:53:08.781338+07', '2021-07-02 16:53:08.781338+07'),
(10, 'Avengers: Infinity War (Biệt đội siêu anh hùng: Cuộc chiến vô cực)', '2021-07-02 16:53:08.781338+07', 'NULL', 'https://www.youtube.com/watch?v=6ZfuNTqbHE8&ab_channel=MarvelEntertainment', 149, ' Anthony và Joe Russo.', ' Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Benedict Cumberbatch, Don Cheadle, Tom Holland, Chadwick Boseman, Paul Bettany, Elizabeth Olsen, Anthony Mackie, Sebastian Stan, Danai Gurira, Letitia Wright, Dave Bautista, Zoe Saldana, Josh Brolin và Chris Pratt,...', 'Siêu anh hùng viễn tưởng', '2021-07-02 16:53:08.781338+07', '2021-07-02 16:53:08.781338+07'),
(7, 'Captain America: Civil War (Captain America: Nội Chiến Siêu Anh Hùng)', '2021-07-02 16:40:55.200937+07', 'NULL', 'https://www.youtube.com/watch?v=dKrVegVI0Us&ab_channel=MarvelEntertainment', 147, 'Anthony Russo, Joe Russo.', 'Chris Evans, Robert Downey Jr., Scarlett Johansson, Sebastian Stan, Anthony Mackie, Don Cheadle, Jeremy Renner, Chadwick Boseman, Paul Bettany, Elizabeth Olsen, Paul Rudd, Emily VanCamp, Tom Holland, Frank Grillo, William Hurt, và Daniel Brühl,...', 'Siêu anh hùng viễn tưởng', '2021-07-02 16:52:48.77121+07', '2021-07-02 16:40:55.200937+07'),
(8, 'Black Panther (Chiến binh báo đen)', '2021-07-02 16:53:08.781338+07', 'NULL', 'https://www.youtube.com/watch?v=xjDjIWPwc PU&ab_channel=MarvelEntertainment', 134, 'Ryan Coogler.', ' Chadwick Boseman, Michael B. Jordan, Lupita Nyong''o, Danai Gurira, Martin Freeman, Daniel Kaluuya, Letitia Wright, Winston Duke, Angela Bassett, Forest Whitaker và Andy Serkis,...', 'Siêu anh hùng viễn tưởng', '2021-07-02 16:53:08.781338+07', '2021-07-02 16:53:08.781338+07'),
(11, 'Avengers: End game (2019) (Biệt đội siêu anh hùng: Hồi Kết)', '2021-07-02 16:53:08.781338+07', 'NULL', 'https://www.youtube.com/watch?v=TcMBFSGVi1c&ab_channel=MarvelEntertainment', 181, 'Joe Russo, Anthony Russo.', 'Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Benedict Cumberbatch,...', 'Siêu anh hùng viễn tưởng', '2021-07-02 16:53:08.781338+07', '2021-07-02 16:53:08.781338+07'),
(12, ' Black Widow (Góa Phụ Đen) (2021)', '2021-07-02 16:53:08.781338+07', 'NULL', 'https://www.youtube.com/watch?v=RxAtuMu_ph4&ab_channel=MarvelEntertainment', 130, 'Cate Shortland', 'Scarlett Johansson, David Harbour, Florence Pugh, O-T Fagbenlen, Rachel Weisz, Ray Winstone,...', 'hành động', '2021-07-02 16:53:08.781338+07', '2021-07-02 16:53:08.781338+07'),
(13, 'Spider-Man: No Way Home ( Spider-Man : Không còn đường về ) (2021)', '2021-07-19 11:29:12.312131+07', 'null', 'https://www.youtube.com/watch?v=N6wMMMt5DY4', 140, 'Jon Watts', 'Tom Holland, Zendaya, Jacob Batalon', ' Hành động, viễn tưởng', '2021-07-19 11:29:12.312131+07', '2021-07-19 11:29:12.312131+07'),
(14, 'Cướp biển vùng Caribbean: Lời nguyền của tàu Ngọc Trai Đen', '2021-07-19 11:29:12.312131+07', 'null', 'https://youtu.be/naQr0uTrH_s', 143, 'Gore Verbinski', 'Johnny Depp, Orlando Bloom', 'Hành động,Viễn tưởng', '2021-07-19 11:29:12.312131+07', '2021-07-19 11:29:12.312131+07'),
(15, 'Chiến binh Báo Đen (Black Panther)', '2021-07-19 11:29:12.312131+07', 'null', 'https://www.youtube.com/watch?v=xjDjIWPwcPU&t=5s', 134, 'Ryan Coogler', 'Chadwick Boseman, Michael B. Jordan', 'Phiêu lưu, Hành động', '2021-07-19 11:29:12.312131+07', '2021-07-19 11:29:12.312131+07');

INSERT INTO "public"."Raps" ("id", "TenRap", "LoaiRap", "KTNgang", "KTDoc", "createdAt", "updatedAt", "CumRapId") VALUES
(14, 'Rạp 4', '3D', 16, 5, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 3);
INSERT INTO "public"."Raps" ("id", "TenRap", "LoaiRap", "KTNgang", "KTDoc", "createdAt", "updatedAt", "CumRapId") VALUES
(3, 'Rạp 3', '3D', 16, 5, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 1);
INSERT INTO "public"."Raps" ("id", "TenRap", "LoaiRap", "KTNgang", "KTDoc", "createdAt", "updatedAt", "CumRapId") VALUES
(4, 'Rạp 4', '3D', 16, 5, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 1);
INSERT INTO "public"."Raps" ("id", "TenRap", "LoaiRap", "KTNgang", "KTDoc", "createdAt", "updatedAt", "CumRapId") VALUES
(18, 'Rạp 3', '3D', 16, 5, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 4),
(19, 'Rạp 4', '3D', 16, 5, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 4),
(20, 'Rạp 5', '4DX', 16, 5, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 4),
(22, 'Rạp 2', '2D', 16, 5, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 5),
(23, 'Rạp 3', '3D', 16, 5, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 5),
(24, 'Rạp 4', '3D', 16, 5, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 5),
(25, 'Rạp 5', '4DX', 16, 5, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 5),
(28, 'Rạp 3', '3D', 16, 5, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 6),
(10, 'Rạp 5', '4DX', 16, 5, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 2),
(29, 'Rạp 4', '3D', 16, 5, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 6),
(30, 'Rạp 5', '4DX', 16, 5, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 6),
(33, 'Rạp 3', '3D', 16, 5, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 7),
(34, 'Rạp 4', '3D', 16, 5, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 7),
(35, 'Rạp 5', '4DX', 16, 5, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 7),
(38, 'Rạp 3', '3D', 16, 5, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 8),
(39, 'Rạp 4', '3D', 16, 5, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 8),
(40, 'Rạp 5', '4DX', 16, 5, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 8),
(26, 'Rạp 1', '2D', 16, 10, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 6),
(1, 'Rạp 1', '2D', 16, 10, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 1),
(2, 'Rạp 2', '2D', 16, 10, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 1),
(6, 'Rạp 1', '2D', 16, 10, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 2),
(7, 'Rạp 2', '2D', 16, 10, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 2),
(11, 'Rạp 1', '2D', 16, 10, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 3),
(12, 'Rạp 2', '2D', 16, 10, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 3),
(16, 'Rạp 1', '2D', 16, 10, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 4),
(27, 'Rạp 2', '2D', 16, 10, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 6),
(17, 'Rạp 2', '2D', 16, 10, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 4),
(21, 'Rạp 1', '2D', 16, 10, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 5),
(32, 'Rạp 2', '2D', 16, 10, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 7),
(31, 'Rạp 1', '2D', 16, 10, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 7),
(36, 'Rạp 1', '2D', 16, 10, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 8),
(37, 'Rạp 2', '2D', 16, 10, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 8),
(15, 'Rạp 5', '4DX', 16, 5, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 3),
(5, 'Rạp 5', '4DX', 16, 5, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 1),
(8, 'Rạp 3', '3D', 16, 5, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 2),
(9, 'Rạp 4', '3D', 16, 5, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 2),
(13, 'Rạp 3', '3D', 16, 5, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 3),
(41, 'Rạp 1', '2D', 16, 10, '2021-07-20 11:41:24.973+07', '2021-07-20 11:41:24.973+07', 9);

INSERT INTO "public"."SuatChieus" ("id", "ThoiDiemBatDau", "ThoiDiemKetThuc", "GiaVe", "createdAt", "updatedAt", "PhimId", "RapId") VALUES
(57, '17h, 21/7/2021', '19h20, 21/7/2021', 100000, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 5, 9);
INSERT INTO "public"."SuatChieus" ("id", "ThoiDiemBatDau", "ThoiDiemKetThuc", "GiaVe", "createdAt", "updatedAt", "PhimId", "RapId") VALUES
(10, '12h 22/7/2021', '14h20 22/7/2021', 140000, '2021-07-20 11:21:32.526+07', '2021-07-20 11:21:32.526+07', 10, 6);
INSERT INTO "public"."SuatChieus" ("id", "ThoiDiemBatDau", "ThoiDiemKetThuc", "GiaVe", "createdAt", "updatedAt", "PhimId", "RapId") VALUES
(58, '12h 22/7/2021', '14h20 22/7/2021', 140000, '2021-07-20 11:37:52.824+07', '2021-07-20 11:37:52.824+07', 10, 6);
INSERT INTO "public"."SuatChieus" ("id", "ThoiDiemBatDau", "ThoiDiemKetThuc", "GiaVe", "createdAt", "updatedAt", "PhimId", "RapId") VALUES
(56, '10h 22/7/2021', '12h30 22/7/2021', 150000, '2021-07-20 10:19:32.845+07', '2021-07-20 10:19:32.845+07', 2, 5),
(27, '19h, 21/7/2021', '22h, 21/7/2021', 150000, '2021-07-18 18:36:55.369374+07', '2021-07-18 18:36:55.369374+07', 5, 40),
(26, '19h, 21/7/2021', '22h, 21/7/2021', 150000, '2021-07-18 18:36:55.369374+07', '2021-07-18 18:36:55.369374+07', 5, 30),
(25, '19h, 21/7/2021', '22h, 21/7/2021', 150000, '2021-07-18 18:36:55.369374+07', '2021-07-18 18:36:55.369374+07', 5, 25),
(24, '19h, 21/7/2021', '22h, 21/7/2021', 150000, '2021-07-18 18:36:55.369374+07', '2021-07-18 18:36:55.369374+07', 5, 21),
(23, '19h, 21/7/2021', '22h, 21/7/2021', 150000, '2021-07-18 18:36:55.369374+07', '2021-07-18 18:36:55.369374+07', 5, 16),
(22, '19h, 21/7/2021', '22h, 21/7/2021', 150000, '2021-07-18 18:36:55.369374+07', '2021-07-18 18:36:55.369374+07', 5, 1),
(12, '17h, 21/7/2021', '19h20, 21/7/2021', 100000, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 5, 13),
(11, '17h, 21/7/2021', '19h20, 21/7/2021', 100000, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 5, 11),
(7, '9h20, 22/7/2021', '11h30, 22/7/2021', 100000, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 6, 5),
(8, '9h20, 22/7/2021', '11h30, 22/7/2021', 100000, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 6, 7),
(6, '9h20, 22/7/2021', '11h30, 22/7/2021', 100000, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 6, 4),
(5, '9h20, 22/7/2021', '11h30, 22/7/2021', 100000, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 6, 2),
(4, '8h20, 21/7/2021', '10h30, 21/7/2021', 100000, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 3, 1),
(3, '8h20, 21/7/2021', '10h30, 21/7/2021', 100000, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 3, 10),
(2, '8h20, 21/7/2021', '10h30, 21/7/2021', 100000, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 3, 6),
(1, '8h20, 21/7/2021', '10h30, 21/7/2021', 100000, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 3, 3),
(21, '10h, 18/7/2021', '19h, 18/7/2021', 100000, '2021-07-02 20:43:28.192325+07', '2021-07-18 15:34:40.047218+07', 2, 1),
(28, '9h20, 22/7/2021', '11h30, 22/7/2021', 150000, '2021-07-18 19:29:28.66915+07', '2021-07-18 19:29:28.66915+07', 2, 4),
(29, '9h20, 22/7/2021', '11h30, 22/7/2021', 150000, '2021-07-18 19:29:28.66915+07', '2021-07-18 19:29:28.66915+07', 2, 10),
(30, '9h20, 22/7/2021', '11h30, 22/7/2021', 150000, '2021-07-18 19:29:28.66915+07', '2021-07-18 19:29:28.66915+07', 2, 14),
(31, '9h20, 22/7/2021', '11h30, 22/7/2021', 100000, '2021-07-18 19:29:28.66915+07', '2021-07-18 19:29:28.66915+07', 2, 16),
(32, '17h, 21/7/2021', '19h20, 21/7/2021', 100000, '2021-07-18 19:29:28.66915+07', '2021-07-18 19:29:28.66915+07', 2, 20),
(33, '17h, 21/7/2021', '19h20, 21/7/2021', 100000, '2021-07-18 19:29:28.66915+07', '2021-07-18 19:29:28.66915+07', 2, 22),
(34, '17h, 21/7/2021', '19h20, 21/7/2021', 100000, '2021-07-18 19:29:28.66915+07', '2021-07-18 19:29:28.66915+07', 2, 30),
(35, '17h, 21/7/2021', '19h20, 21/7/2021', 100000, '2021-07-18 19:29:28.66915+07', '2021-07-18 19:29:28.66915+07', 2, 35),
(36, '17h, 21/7/2021', '19h20, 21/7/2021', 100000, '2021-07-18 19:29:28.66915+07', '2021-07-18 19:29:28.66915+07', 2, 40),
(37, '8h20, 21/7/2021', '10h30, 21/7/2021', 90000, '2021-07-18 19:43:59.52296+07', '2021-07-18 19:43:59.52296+07', 3, 14),
(38, '8h20, 21/7/2021', '10h30, 21/7/2021', 90000, '2021-07-18 19:43:59.52296+07', '2021-07-18 19:43:59.52296+07', 3, 18),
(39, '8h20, 21/7/2021', '10h30, 21/7/2021', 90000, '2021-07-18 19:43:59.52296+07', '2021-07-18 19:43:59.52296+07', 3, 20),
(40, '8h20, 21/7/2021', '10h30, 21/7/2021', 90000, '2021-07-18 19:43:59.52296+07', '2021-07-18 19:43:59.52296+07', 3, 22),
(41, '8h20, 21/7/2021', '10h30, 21/7/2021', 90000, '2021-07-18 19:43:59.52296+07', '2021-07-18 19:43:59.52296+07', 3, 25),
(42, '9h20, 22/7/2021', '11h30, 22/7/2021', 90000, '2021-07-18 19:43:59.52296+07', '2021-07-18 19:43:59.52296+07', 3, 30),
(43, '9h20, 22/7/2021', '11h30, 22/7/2021', 90000, '2021-07-18 19:43:59.52296+07', '2021-07-18 19:43:59.52296+07', 3, 35),
(44, '9h20, 22/7/2021', '11h30, 22/7/2021', 90000, '2021-07-18 19:43:59.52296+07', '2021-07-18 19:43:59.52296+07', 3, 38),
(45, '9h20, 22/7/2021', '11h30, 22/7/2021', 90000, '2021-07-18 19:43:59.52296+07', '2021-07-18 19:43:59.52296+07', 3, 40),
(46, '17h, 21/7/2021', '19h20, 21/7/2021', 100000, '2021-07-18 19:29:28.66915+07', '2021-07-18 19:29:28.66915+07', 4, 40),
(47, '8h20, 21/7/2021', '10h30, 21/7/2021', 90000, '2021-07-18 19:43:59.52296+07', '2021-07-18 19:43:59.52296+07', 4, 14),
(48, '8h20, 21/7/2021', '10h30, 21/7/2021', 90000, '2021-07-18 19:43:59.52296+07', '2021-07-18 19:43:59.52296+07', 4, 18),
(49, '8h20, 21/7/2021', '10h30, 21/7/2021', 90000, '2021-07-18 19:43:59.52296+07', '2021-07-18 19:43:59.52296+07', 4, 20),
(50, '8h20, 21/7/2021', '10h30, 21/7/2021', 90000, '2021-07-18 19:43:59.52296+07', '2021-07-18 19:43:59.52296+07', 4, 22),
(51, '8h20, 21/7/2021', '10h30, 21/7/2021', 90000, '2021-07-18 19:43:59.52296+07', '2021-07-18 19:43:59.52296+07', 4, 25),
(20, '19h, 21/7/2021', '22h, 21/7/2021', 150000, '2021-07-02 20:43:28.192325+07', '2021-07-02 20:43:28.192325+07', 11, 17),
(19, '19h, 21/7/2021', '22h, 21/7/2021', 150000, '2021-07-02 20:43:28.192325+07', '2021-07-02 20:43:28.192325+07', 11, 16),
(18, '19h, 21/7/2021', '22h, 21/7/2021', 150000, '2021-07-02 20:43:28.192325+07', '2021-07-02 20:43:28.192325+07', 11, 14),
(17, '19h, 21/7/2021', '22h, 21/7/2021', 150000, '2021-07-02 20:43:28.192325+07', '2021-07-02 20:43:28.192325+07', 11, 12),
(16, '18h, 21/7/2021', '20h30, 21/7/2021', 100000, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 7, 25),
(15, '18h, 21/7/2021', '20h30, 21/7/2021', 100000, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 7, 21),
(14, '18h, 21/7/2021', '20h30, 21/7/2021', 100000, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 7, 23),
(13, '18h, 21/7/2021', '20h30, 21/7/2021', 100000, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 7, 30),
(59, '12h 22/7/2021', '14h20 22/7/2021', 140000, '2021-07-20 11:38:16.197+07', '2021-07-20 11:38:16.197+07', 11, 6),
(52, '9h20, 22/7/2021', '11h30, 22/7/2021', 90000, '2021-07-18 19:43:59.52296+07', '2021-07-18 19:43:59.52296+07', 4, 30),
(53, '9h20, 22/7/2021', '11h30, 22/7/2021', 90000, '2021-07-18 19:43:59.52296+07', '2021-07-18 19:43:59.52296+07', 4, 35),
(54, '9h20, 22/7/2021', '11h30, 22/7/2021', 90000, '2021-07-18 19:43:59.52296+07', '2021-07-18 19:43:59.52296+07', 4, 38),
(55, '9h20, 22/7/2021', '11h30, 22/7/2021', 90000, '2021-07-18 19:43:59.52296+07', '2021-07-18 19:43:59.52296+07', 4, 40),
(9, '17h, 21/7/2021', '19h20, 21/7/2021', 100000, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 5, 8);

INSERT INTO "public"."Users" ("id", "Email", "Password", "Name", "Phone", "UserType", "TokenUser", "Verify", "createdAt", "updatedAt") VALUES
(11, 'congle00089@gmail.com', '$2a$10$PVLjPhj1.3JoXZL3OnCtM.fvimZ0MHlrsjzO1B/llYXwL4YjLf95.', 'Thành Công', 852029472, 1, 'd068cb7fd9cfdbc980d61cbe1fcc4699757abc773d6f9b9d099a7e61b700d44be44f0c09f53ffc4da6c077b96e5c75587c15e0c3cb25c35aa15a196c5a813751', 1, '2021-07-18 14:45:26.223+07', '2021-07-18 20:29:50.741+07');
INSERT INTO "public"."Users" ("id", "Email", "Password", "Name", "Phone", "UserType", "TokenUser", "Verify", "createdAt", "updatedAt") VALUES
(12, 'thanhcong1234553@gmail.com', '$2a$10$ofgoBRzowfoXKbEvtHGOX.MLHVHB0/Od6cQXJ1So3OONV15LXlKSO', 'Thành Công', 852029472, 0, '4a4f70e9ee6ef714bd404e43b5109c1d48846d3b1cc82c49b5705dbcbc403265eec6910eaa4c2f9dea649709238eede9e8bfa930193a7e7144db096aa1dea060', 1, '2021-07-19 11:44:39.8+07', '2021-07-20 11:47:57.179+07');


INSERT INTO "public"."Ves" ("MaVe", "MaGhe", "DiaChiNgang", "DiaChiDoc", "GiaTien", "createdAt", "updatedAt", "DatChoMaDatCho") VALUES
('b6f003a0-e915-11eb-a9a1-73f179097afd', 'E8', 'E', '8', 90000, '2021-07-20 11:48:23.77+07', '2021-07-20 11:48:23.77+07', 'b6ea1030-e915-11eb-a9a1-73f179097afd');
INSERT INTO "public"."Ves" ("MaVe", "MaGhe", "DiaChiNgang", "DiaChiDoc", "GiaTien", "createdAt", "updatedAt", "DatChoMaDatCho") VALUES
('b6f003a1-e915-11eb-a9a1-73f179097afd', 'E9', 'E', '9', 90000, '2021-07-20 11:48:23.77+07', '2021-07-20 11:48:23.77+07', 'b6ea1030-e915-11eb-a9a1-73f179097afd');

