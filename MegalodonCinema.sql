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
    "SuatChieuId" int4
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
    "updatedAt" timestamptz NOT NULL
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
    "updatedAt" timestamptz NOT NULL,
    PRIMARY KEY ("id")
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

INSERT INTO "public"."Raps" ("id", "TenRap", "LoaiRap", "KTNgang", "KTDoc", "createdAt", "updatedAt", "CineplexId") VALUES
(1, 'Rạp 1', '2D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 1),
(2, 'Rạp 2', '2D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 1),
(3, 'Rạp 3', '3D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 1),
(4, 'Rạp 4', '3D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 1),
(5, 'Rạp 5', '4DX', 40, 50, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 1),
(6, 'Rạp 1', '2D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 2),
(7, 'Rạp 2', '2D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 2),
(8, 'Rạp 3', '3D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 2),
(9, 'Rạp 4', '3D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 2),
(10, 'Rạp 5', '4DX', 40, 50, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 2),
(11, 'Rạp 1', '2D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 3),
(12, 'Rạp 2', '2D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 3),
(13, 'Rạp 3', '3D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 3),
(14, 'Rạp 4', '3D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 3),
(15, 'Rạp 5', '4DX', 40, 50, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 3),
(16, 'Rạp 1', '2D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 4),
(17, 'Rạp 2', '2D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 4),
(18, 'Rạp 3', '3D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 4),
(19, 'Rạp 4', '3D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 4),
(20, 'Rạp 5', '4DX', 40, 50, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 4),
(21, 'Rạp 1', '2D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 5),
(22, 'Rạp 2', '2D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 5),
(23, 'Rạp 3', '3D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 5),
(24, 'Rạp 4', '3D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 5),
(25, 'Rạp 5', '4DX', 40, 50, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 5),
(26, 'Rạp 1', '2D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 6),
(27, 'Rạp 2', '2D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 6),
(28, 'Rạp 3', '3D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 6),
(29, 'Rạp 4', '3D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 6),
(30, 'Rạp 5', '4DX', 40, 50, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 6),
(31, 'Rạp 1', '2D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 7),
(32, 'Rạp 2', '2D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 7),
(33, 'Rạp 3', '3D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 7),
(34, 'Rạp 4', '3D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 7),
(35, 'Rạp 5', '4DX', 40, 50, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 7),
(40, 'Rạp 5', '4DX', 40, 50, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 8),
(36, 'Rạp 1', '2D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 8),
(37, 'Rạp 2', '2D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 8),
(38, 'Rạp 3', '3D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 8),
(39, 'Rạp 4', '3D', 20, 30, '2021-07-02 20:26:50.912144+07', '2021-07-02 20:26:50.912144+07', 8);


INSERT INTO "public"."CumRaps" ("id", "TenCum", "DiaChi", "Maps", "createdAt", "updatedAt") VALUES
(1, 'Lotte Nam Sài Gòn', 'Tầng 3, Lotte Mart, 469 Nguyễn Hữu Thọ, P. Tân Hưng, Q.7, Tp. Hồ Chí Minh', '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15679.66353664906!2d106.7020124!3d10.7409662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6ab49da47594ce7b!2sLOTTE%20Mart%20Qu%E1%BA%ADn%207!5e0!3m2!1svi!2s!4v1626576951792!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>', '2021-07-02 17:03:52.361987+07', '2021-07-02 17:03:52.361987+07'),
(2, 'Lotte Cộng Hoà', 'Tầng 4, Pico Plaza, 20 Cộng Hòa, P.12, Q. Tân Bình, Tp. Hồ Chí Minh', '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15676.547180651754!2d106.6530556!3d10.8008333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x469b02156ee650cd!2zTG90dGUgQ2luZW1hIEPhu5luZyBIb8Og!5e0!3m2!1svi!2s!4v1626576992264!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>', '2021-07-02 17:03:52.361987+07', '2021-07-02 17:03:52.361987+07'),
(3, 'Lotte Cantavil', 'Tầng 7, Cantavil Premier, Xa lộ Hà Nội, P. n Phú, Q.2, TP. Hồ Chí Minh', '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1289406252695!2d106.74471141480106!3d10.801435192304561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752613499adb6f%3A0x7d3a7531caed099b!2sLotte%20Cinema%20Cantavil!5e0!3m2!1svi!2s!4v1626577033250!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>', '2021-07-02 17:03:52.361987+07', '2021-07-02 17:03:52.361987+07'),
(4, 'Lotte Phú Thọ', 'Tầng 4 Lotte Mart Phú Thọ, ngã tư 3/2 và Lê Đại Hành, Q.11, Tp. Hồ Chí Minh', '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6322011372467!2d106.65497171480061!3d10.76280319233076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eec3fe89d17%3A0x1211052fca4c6df3!2zTG90dGUgQ2luZW1hIFBow7ogVGjhu40!5e0!3m2!1svi!2s!4v1626577061260!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>', '2021-07-02 17:03:52.361987+07', '2021-07-02 17:03:52.361987+07'),
(5, 'Lotte Nowzone', 'Tầng 5, TTTM Nowzone, 235 Nguyễn Văn Cừ, P. Nguyễn Cư Trinh, Q.1, Tp. Hồ Chí Minh', '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6133428171815!2d106.68024861480066!3d10.764253292329798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f19358a688d%3A0x950e00fb59d5e2db!2sLotte%20Cinema%20Nowzone!5e0!3m2!1svi!2s!4v1626577099669!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>', '2021-07-02 17:03:52.361987+07', '2021-07-02 17:03:52.361987+07'),
(6, 'Lotte Gò Vấp', 'Tầng 3, Lotte Mart Gò Vấp, 242 Nguyễn Văn Lượng, Q.Gò Vấp, TP.HCM', '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.651372039666!2d106.66916781411689!3d10.83796916101993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529abcfd012d3%3A0x8b7cd7b29784eb3f!2zTE9UVEUgTWFydCBHw7IgVuG6pXA!5e0!3m2!1svi!2s!4v1626577217527!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>', '2021-07-02 17:03:52.361987+07', '2021-07-02 17:03:52.361987+07'),
(7, 'Lotte Thủ Đức', 'Tầng 2, TTTM Joy Citipoint Thủ Đức, KCX Linh Trung 1, QL 1A, Tp. Hồ Chí Minh', '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31346.854877919115!2d106.7496567!3d10.8604388!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175278015247b3d%3A0x63d00ce9adeb8974!2zTG90dGUgQ2luZW1hIFRo4bunIMSQ4bupYw!5e0!3m2!1svi!2s!4v1626577246980!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>', '2021-07-02 17:03:52.361987+07', '2021-07-02 17:03:52.361987+07'),
(8, 'Lotte Ung Văn Khiêm', 'Tầng Trệt, TTTM TTC Plaza, Số 26, Đường Ung Văn Khiêm, Phường 25, Quận Bình Thạnh, TP.HCM', '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0297906942046!2d106.71099461480112!3d10.809030192299407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175291a6ee0871f%3A0x5453e508fed76d0f!2sLOTTE%20Cinema%20Ung%20V%C4%83n%20Khi%C3%AAm!5e0!3m2!1svi!2s!4v1626577287675!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>', '2021-07-02 17:03:52.361987+07', '2021-07-02 17:03:52.361987+07');


INSERT INTO "public"."Phims" ("id", "Ten", "NgayCongChieu", "Poster", "TraiLers", "ThoiLuong", "DaoDien", "DienVien", "TheLoai", "createdAt", "updatedAt") VALUES
(1, 'Bố Già', '2021-07-02 16:23:02.253558+07', 'NULL', 'https://www.youtube.com/embed/jluSu8Rw6YE', 140, 'Trấn Thành ', 'Trấn Thành, Tuấn Trần, Lê Giang, La Thành, Ngọc Giàu, ...', 'Hài Tình Cảm', '2021-07-02 16:23:02.253558+07', '2021-07-02 16:23:02.253558+07'),
(2, 'The Avengers: Biệt đội siêu anh hùng', '2021-07-02 16:30:28.502172+07', 'NULL', 'https://www.youtube.com/embed/eOrNdBpGMv8', 133, 'Joss Whedon', ' Scarlett Johansson, Samuel l. Jackson, Jeremy Renner, Chris Evans, Mark Ruffalo, Chris Hem,...', 'Siêu anh hùng viễn tưởng', '2021-07-02 16:30:28.502172+07', '2021-07-02 16:30:28.502172+07'),
(3, 'Iron Man 3', '2021-07-02 16:34:55.199629+07', 'NULL', 'https://www.youtube.com/embed/Ke1Y3P9D0Bc', 130, 'Shane Black', ' Don Cheadle, Miguel Ferrer, William Sadler, James Badge Dale, Rebecca Hall', 'Siêu anh hùng viễn tưởng', '2021-07-02 16:34:55.199629+07', '2021-07-02 16:34:55.199629+07'),
(4, 'The Dark World (Thần sấm 2: Thế giới bóng tối)', '2021-07-02 16:34:55.199629+07', 'NULL', 'https://www.youtube.com/embed/jHFhZLJajlc', 112, 'Alan Taylor.', 'Tadanobu Asano, Chris Hemsworth, Kat Dennings, Natalie Portman, Christopher Eccleston,...', 'Siêu anh hùng viễn tưởng', '2021-07-02 16:34:55.199629+07', '2021-07-02 16:34:55.199629+07'),
(5, 'Avengers: Age of Ultron (Avengers: Đế chế Ultron)', '2021-07-02 16:40:55.200937+07', 'NULL', 'https://www.youtube.com/embed/tmeOjFno6Do', 141, 'Joss Whedon.', 'Robert Downey, Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Jeremy Renner, Samuel L. Jackson,...', 'Siêu anh hùng viễn tưởng', '2021-07-02 16:40:55.200937+07', '2021-07-02 16:40:55.200937+07'),
(6, 'Doctor Strange (Phù thủy tối thượng)', '2021-07-02 16:40:55.200937+07', 'NULL', 'https://www.youtube.com/embed/HSzx-zryEgM', 115, 'Scott Derrickson.', ' Benedict Cumberbatch, Chiwetel Ejiofor, Rachel McAdams, Benedict Wong, Michael Stuhlbarg, Benjamin Bratt, Scott Adkins, Mads Mikkelsen và Tilda Swinton,...', 'Siêu anh hùng viễn tưởng', '2021-07-02 16:40:55.200937+07', '2021-07-02 16:40:55.200937+07'),
(9, 'Spider-Man: Homecoming (Người nhện: Trở về nhà)', '2021-07-02 16:53:08.781338+07', 'NULL', 'https://www.youtube.com/embed/n9DwoQ7HWvI', 133, 'Jon Watts.', 'Tom Holland, Michael Keaton, Jon Favreau, Zendaya, Donald Glover, Tyne Daly, Marisa Tomei, và Robert Downey Jr,...', 'Siêu anh hùng viễn tưởng', '2021-07-02 16:53:08.781338+07', '2021-07-02 16:53:08.781338+07'),
(10, 'Avengers: Infinity War (Biệt đội siêu anh hùng: Cuộc chiến vô cực)', '2021-07-02 16:53:08.781338+07', 'NULL', 'https://www.youtube.com/embed/6ZfuNTqbHE8', 149, ' Anthony và Joe Russo.', ' Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Benedict Cumberbatch, Don Cheadle, Tom Holland, Chadwick Boseman, Paul Bettany, Elizabeth Olsen, Anthony Mackie, Sebastian Stan, Danai Gurira, Letitia Wright, Dave Bautista, Zoe Saldana, Josh Brolin và Chris Pratt,...', 'Siêu anh hùng viễn tưởng', '2021-07-02 16:53:08.781338+07', '2021-07-02 16:53:08.781338+07'),
(7, 'Captain America: Civil War (Captain America: Nội Chiến Siêu Anh Hùng)', '2021-07-02 16:40:55.200937+07', 'NULL', 'https://www.youtube.com/embed/dKrVegVI0Us', 147, 'Anthony Russo, Joe Russo.', 'Chris Evans, Robert Downey Jr., Scarlett Johansson, Sebastian Stan, Anthony Mackie, Don Cheadle, Jeremy Renner, Chadwick Boseman, Paul Bettany, Elizabeth Olsen, Paul Rudd, Emily VanCamp, Tom Holland, Frank Grillo, William Hurt, và Daniel Brühl,...', 'Siêu anh hùng viễn tưởng', '2021-07-02 16:52:48.77121+07', '2021-07-02 16:40:55.200937+07'),
(8, 'Black Panther (Chiến binh báo đen)', '2021-07-02 16:53:08.781338+07', 'NULL', 'https://www.youtube.com/embed/xjDjIWPwcPU', 134, 'Ryan Coogler.', ' Chadwick Boseman, Michael B. Jordan, Lupita Nyong''o, Danai Gurira, Martin Freeman, Daniel Kaluuya, Letitia Wright, Winston Duke, Angela Bassett, Forest Whitaker và Andy Serkis,...', 'Siêu anh hùng viễn tưởng', '2021-07-02 16:53:08.781338+07', '2021-07-02 16:53:08.781338+07'),
(11, 'Avengers: End game (2019) (Biệt đội siêu anh hùng: Hồi Kết)', '2021-07-02 16:53:08.781338+07', 'NULL', 'https://www.youtube.com/embed/TcMBFSGVi1c', 181, 'Joe Russo, Anthony Russo.', 'Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Benedict Cumberbatch,...', 'Siêu anh hùng viễn tưởng', '2021-07-02 16:53:08.781338+07', '2021-07-02 16:53:08.781338+07'),
(12, ' Black Widow (Góa Phụ Đen) (2021)', '2021-07-02 16:53:08.781338+07', 'NULL', 'https://www.youtube.com/embed/RxAtuMu_ph4', 130, 'Cate Shortland', 'Scarlett Johansson, David Harbour, Florence Pugh, O-T Fagbenlen, Rachel Weisz, Ray Winstone,...', 'hành động', '2021-07-02 16:53:08.781338+07', '2021-07-02 16:53:08.781338+07');

INSERT INTO "public"."SuatChieus" ("id", "ThoiDiemBatDau", "ThoiDiemKetThuc", "GiaVe", "createdAt", "updatedAt", "MovieId", "CinemaId") VALUES
(1, '8h20, 21/7/2021', '10h30, 21/7/2021', 100, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 3, 3),
(2, '8h20, 21/7/2021', '10h30, 21/7/2021', 100, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 3, 6),
(3, '8h20, 21/7/2021', '10h30, 21/7/2021', 100, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 3, 10),
(4, '8h20, 21/7/2021', '10h30, 21/7/2021', 100, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 3, 1),
(5, '9h20, 22/7/2021', '11h30, 22/7/2021', 100, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 6, 2),
(6, '9h20, 22/7/2021', '11h30, 22/7/2021', 100, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 6, 4),
(7, '9h20, 22/7/2021', '11h30, 22/7/2021', 100, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 6, 5),
(8, '9h20, 22/7/2021', '11h30, 22/7/2021', 100, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 6, 7),
(13, '18h, 21/7/2021', '20h30, 21/7/2021', 100, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 7, 30),
(14, '18h, 21/7/2021', '20h30, 21/7/2021', 100, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 7, 23),
(15, '18h, 21/7/2021', '20h30, 21/7/2021', 100, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 7, 21),
(16, '18h, 21/7/2021', '20h30, 21/7/2021', 100, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 7, 25),
(17, '19h, 21/7/2021', '22h, 21/7/2021', 150, '2021-07-02 20:43:28.192325+07', '2021-07-02 20:43:28.192325+07', 11, 12),
(18, '19h, 21/7/2021', '22h, 21/7/2021', 150, '2021-07-02 20:43:28.192325+07', '2021-07-02 20:43:28.192325+07', 11, 14),
(19, '19h, 21/7/2021', '22h, 21/7/2021', 150, '2021-07-02 20:43:28.192325+07', '2021-07-02 20:43:28.192325+07', 11, 16),
(20, '19h, 21/7/2021', '22h, 21/7/2021', 150, '2021-07-02 20:43:28.192325+07', '2021-07-02 20:43:28.192325+07', 11, 17),
(9, '17h, 21/7/2021', '19h20, 21/7/2021', 80, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 1, 8),
(10, '17h, 21/7/2021', '19h20, 21/7/2021', 80, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 1, 9),
(11, '17h, 21/7/2021', '19h20, 21/7/2021', 80, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 1, 11),
(12, '17h, 21/7/2021', '19h20, 21/7/2021', 80, '2021-07-02 20:41:03.069126+07', '2021-07-02 20:41:03.069126+07', 1, 13);











