cmake_minimum_required(VERSION 3.17)

set(CMAKE_CXX_FLAGS "-O2")
project(VPDQ)
find_package(PkgConfig REQUIRED)
pkg_check_modules(LIBAV REQUIRED IMPORTED_TARGET
    libavdevice
    libavfilter
    libavformat
    libavcodec
    libswresample
    libswscale
    libavutil
)

set(CMAKE_CXX_STANDARD 14)

set(SOURCES
    ../../pdq/cpp/common/pdqhashtypes.cpp
    ../../pdq/cpp/hashing/pdqhashing.cpp
    ../../pdq/cpp/io/hashio.cpp
    ../../pdq/cpp/downscaling/downscaling.cpp
    ../../pdq/cpp/hashing/torben.cpp
    ./hashing/filehasher.cpp
    ./hashing/bufferhasher.cpp
    ./hashing/matchTwoHash.cpp
    ./io/vpdqio.cpp
)

SET(HEADERS
    ../../pdq/cpp/common/pdqbasetypes.h
    ../../pdq/cpp/common/pdqhashtypes.h
    ../../pdq/cpp/hashing/pdqhashing.h
    ../../pdq/cpp/io/hashio.h
    ../../pdq/cpp/downscaling/downscaling.h
    ../../pdq/cpp/hashing/torben.h
    ./hashing/filehasher.h
    ./hashing/vpdqHashType.h
    ./hashing/bufferhasher.h
    ./hashing/matchTwoHash.h
    ./io/vpdqio.h
)

# TODO: Add more specific directories
include_directories (
    ../..
)

add_library(vpdqlib
    ${SOURCES}
    ${HEADERS}
)

add_executable(match-hashes-byline
    bin/match-hashes-byline.cpp
)

add_executable(match-hashes-brute
    bin/match-hashes-brute.cpp
)

add_executable(vpdq-hash-video
    bin/vpdq-hash-video.cpp
)

target_link_libraries(vpdqlib
    PkgConfig::LIBAV
)

target_link_libraries(vpdq-hash-video
    vpdqlib
)

target_link_libraries(match-hashes-brute
    vpdqlib
)

target_link_libraries(match-hashes-byline
    vpdqlib
)
